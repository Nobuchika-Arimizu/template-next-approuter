/**
 * エリアや条件での検索用Index
 */

// エリア
type masterData = {
  id: string
  label: string
  areaId?: string
}[]

export const areas: masterData = [
  { id: 'kita', label: '東北・北海道' },
  { id: 'kanto', label: '関東' },
  { id: 'chubu', label: '中部' },
  { id: 'kansai', label: '関西' },
  { id: 'kyushu', label: '九州' },
]

export const prefectures: masterData = [
  { id: 'reg_1', label: '北海道', areaId: 'kita' },
  { id: 'reg_2', label: '青森県', areaId: 'kita' },
  { id: 'reg_3', label: '岩手県', areaId: 'kita' },
  { id: 'reg_4', label: '宮城県', areaId: 'kita' },
  { id: 'reg_5', label: '秋田県', areaId: 'kita' },
  { id: 'reg_6', label: '山形県', areaId: 'kita' },
  { id: 'reg_7', label: '福島県', areaId: 'kita' },
  // 関東
  { id: 'reg_8', label: '茨城県', areaId: 'kanto' },
  { id: 'reg_9', label: '栃木県', areaId: 'kanto' },
  { id: 'reg_10', label: '群馬県', areaId: 'kanto' },
  { id: 'reg_11', label: '埼玉県', areaId: 'kanto' },
  { id: 'reg_12', label: '千葉県', areaId: 'kanto' },
  { id: 'reg_13', label: '東京都', areaId: 'kanto' },
  { id: 'reg_14', label: '神奈川県', areaId: 'kanto' },
  // 中部
  { id: 'reg_15', label: '新潟県', areaId: 'chubu' },
  { id: 'reg_16', label: '富山県', areaId: 'chubu' },
  { id: 'reg_17', label: '石川県', areaId: 'chubu' },
  { id: 'reg_18', label: '福井県', areaId: 'chubu' },
  { id: 'reg_19', label: '山梨県', areaId: 'chubu' },
  { id: 'reg_20', label: '長野県', areaId: 'chubu' },
  { id: 'reg_21', label: '岐阜県', areaId: 'chubu' },
  { id: 'reg_22', label: '静岡県', areaId: 'chubu' },
  { id: 'reg_23', label: '愛知県', areaId: 'chubu' },
  // 関西
  { id: 'reg_24', label: '三重県', areaId: 'kansai' },
  { id: 'reg_25', label: '滋賀県', areaId: 'kansai' },
  { id: 'reg_26', label: '京都府', areaId: 'kansai' },
  { id: 'reg_27', label: '大阪府', areaId: 'kansai' },
  { id: 'reg_28', label: '兵庫県', areaId: 'kansai' },
  { id: 'reg_29', label: '奈良県', areaId: 'kansai' },
  { id: 'reg_30', label: '和歌山県', areaId: 'kansai' },
  // 九州
  { id: 'reg_40', label: '福岡県', areaId: 'kyushu' },
  { id: 'reg_41', label: '佐賀県', areaId: 'kyushu' },
  { id: 'reg_42', label: '長崎県', areaId: 'kyushu' },
  { id: 'reg_43', label: '熊本県', areaId: 'kyushu' },
  { id: 'reg_44', label: '大分県', areaId: 'kyushu' },
  { id: 'reg_45', label: '宮崎県', areaId: 'kyushu' },
  { id: 'reg_46', label: '鹿児島県', areaId: 'kyushu' },
  { id: 'reg_47', label: '沖縄県', areaId: 'kyushu' },
]

// 条件
export const propertyType: masterData = [
  { id: '101', label: 'マンション' },
  { id: '102', label: '一戸建て' },
  { id: '103', label: '土地' },
  { id: '104', label: '事業用建物' },
]

// 価格
export const prices: masterData = [
  { id: '500', label: '500万円' },
  { id: '1000', label: '1000万円' },
  { id: '1500', label: '1500万円' },
  { id: '2000', label: '2000万円' },
  { id: '2500', label: '2500万円' },
  { id: '3000', label: '3000万円' },
  { id: '3500', label: '3500万円' },
]

// 間取り
export const rooms: masterData = [
  { id: '1k', label: '1K/ DK/ LDK' },
  { id: '2k', label: '2K/ DK/ LDK' },
  { id: '3k', label: '3K/ DK/ LDK' },
  { id: '4k', label: '4K/ DK/ LDK' },
  { id: '5k', label: '5K以上' },
]

// 価格
export const areaSizes: masterData = [
  { id: '20', label: '20m²' },
  { id: '30', label: '30m²' },
  { id: '40', label: '40m²' },
  { id: '50', label: '50m²' },
  { id: '60', label: '60m²' },
  { id: '70', label: '70m²' },
  { id: '80', label: '80m²' },
  { id: '90', label: '90m²' },
  { id: '100', label: '100m²' },
]

// 価格
export const stationWalk: masterData = [
  { id: '1', label: '1分以内' },
  { id: '3', label: '3分以内' },
  { id: '5', label: '5分以内' },
  { id: '7', label: '7分以内' },
  { id: '10', label: '10分以内' },
  { id: '15', label: '15分以内' },
  { id: '20', label: '20分以内' },
]

// こだわり条件
export const kodawariConditions: masterData = [
  { id: 'f30', label: 'ペット相談可' },
  { id: 'f43', label: 'オープンハウス情報有' },
  { id: 'f50', label: 'リフォーム済み' },
  { id: 'f45', label: '仲介手数料不要' },
  { id: 'f47', label: '一押し物件' },
  { id: 'f48', label: 'ほげはうすの物件' },
  { id: 'f49', label: '駐車場あり' },
  { id: 'f51', label: "D'sブリッジ適用" },
  { id: 'f52', label: '沿線2WAY可能' },
  { id: 'f54', label: '駐車場二台以上' },
  { id: 'f62', label: '既存住宅仲介保証' },
  { id: 'f46', label: '投資向け物件' },
  { id: 'f63', label: 'インスペクション済' },
  { id: 'f64', label: 'タワーマンション' },
  { id: 'f65', label: '角部屋' },
  { id: 'f66', label: '角地' },
  { id: 'f67', label: '1階に住みたい' },
  { id: 'f68', label: '2階以上に住みたい' },
  { id: 'f69', label: '最上階に住みたい' },
  { id: 'f41', label: '360°パノラマ掲載物件' },
  { id: 'f70', label: '南向き物件' },
  { id: 'f71', label: '南面道路' },
  { id: 'f72', label: '大規模マンション' },
  { id: 'f40', label: '即入居可能' },
  { id: 'f53', label: '2世帯住宅' },
  { id: 'f55', label: 'SumStock（スムストック）' },
  { id: 'f73', label: '安心R住宅' },
  { id: 'f74', label: '前面道路幅員6m以上' },
  { id: 'f75', label: '一棟ビル' },
  { id: 'f76', label: '一棟マンション' },
  { id: 'f77', label: 'アパート' },
  { id: 'f78', label: '店舗・事務所（区分）' },
  { id: 'f79', label: 'その他（駐車場など）' },
  { id: 'f80', label: '現地見学会情報あり' },
  { id: 'f81', label: '即引き渡し可' },
  { id: 'f42', label: '建築条件なし' },
  { id: 'f82', label: 'フラット35' },
]

// 賃貸運用したい、の物件種別
export const propertyOptions = [
  { id: 'detached', label: '戸建・マンション一室' },
  { id: 'apartment', label: '一棟マンション' },
]

// 相談種別の選択肢（所属情報を追加）
export const consultationTypes = [
  { id: '0', label: '選択してください', propertyTypes: '' },
  { id: 'rent', label: '貸したいご相談', propertyTypes: 'detached' },
  { id: 'leaseSupport', label: '管理代行（リースサポート）のご相談', propertyTypes: 'detached' },
  { id: 'sublease', label: 'サブリースのご相談（土地活用など）', propertyTypes: 'apartment' },
  { id: 'management', label: '管理代行のご相談', propertyTypes: 'apartment' },
]
