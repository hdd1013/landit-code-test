import { useCallback, useContext } from 'react';

import FormContext from '../../contexts/FormContext';

import LanditButton from '../input/LanditButton';

import { get as getEstateData } from '../../models/estatePriceModel';

import useDownload from '../../hooks/useDownload';

function DownloadButton () {
  const { formData } = useContext(FormContext);

  const download = useDownload();

  // データを習得してダウンロード
  const handleClick = useCallback(async (e:React.MouseEvent<HTMLButtonElement>)=>{
    e.preventDefault();
    // Download the data
    const [targetData, nationalData] = await Promise.all([
      getEstateData({
        prefCode: formData.prefCode,
        year: formData.year,
        displayType: formData.purpose,
      }),
      getEstateData({
        year: formData.year,
        displayType: formData.purpose,
      }),
    ]);
    // データが取得できなかった場合、アラートを表示
    if (targetData === null || nationalData === null) {
      alert('データの取得に失敗しました。');
      return;
    }
    // データをBlobに変換してダウンロード
    const downloadBlob = new Blob([
      JSON.stringify([targetData, nationalData], null, 2),
    ], { type: 'application/json' });
    const downloadUrl = URL.createObjectURL(downloadBlob);
    download(downloadUrl, `${targetData.prefName} - ${formData.year}年.json`);
    URL.revokeObjectURL(downloadUrl);
  }, [formData]);

  return (
    <LanditButton
      className='flex-auto text-base py-4 h-[3.25rem]'
      type='button'
      onClick={handleClick}
    >データをダウンロード</LanditButton>
  );
}

export default DownloadButton;
