// APIから読み込む必要はないデータ
// 一貫性のためにモデルのフォルダーに作成する

const formYearOptions = [
  2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019,
  2020, 2021, 2022, 2023,
];

const formPurposeOptions = [
  { value: '1', label: '土地（住宅地）' },
  { value: '2', label: '土地（商業地）' },
  { value: '3', label: '中古マンション等' },
  { value: '4', label: '農地' },
  { value: '5', label: '林地' },
];

export { formYearOptions, formPurposeOptions };
