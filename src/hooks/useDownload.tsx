// URLをファイルとしてダウンロード
function useDownload () {
  const download = (url:string, filename?:string) => {
    const anchor = document.createElement('a');
    document.body.appendChild(anchor);
    anchor.style.display = 'none';
    anchor.href = url;
    if (filename) {
      anchor.download = filename;
    }
    anchor.click();
    anchor.remove();
  };
  return download;
}

export default useDownload;
