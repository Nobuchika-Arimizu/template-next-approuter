/**
 * ピックアップコンテンツ用のタブコンポーネント
 */
import { cn } from '@/lib/utils'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs'
import { BasicCard } from '../card/BasicImageCard'

const tablist = [
  { label: '九州', value: 'kyushu' },
  { label: '中国・四国', value: 'chugoku_shikoku' },
  { label: '関西', value: 'kansai' },
  { label: '中部', value: 'chubu' },
  { label: '関東', value: 'kanto' },
  { label: '東北・北海道', value: 'tohoku_hokkaido' },
]
// 選択時の下矢印
const arrowBottomCss =
  'relative data-[state=active]:after:absolute data-[state=active]:after:left-[calc(50%-0.9rem)] data-[state=active]:after:top-[calc(100%-.8rem)] data-[state=active]:after:content-["▼"] data-[state=active]:after:text-theme'

export function PickupTab() {
  return (
    <Tabs defaultValue="kyushu">
      <TabsList className="flex mx-auto bg-white mb-[2rem]">
        {tablist.map(({ label, value }) => {
          return (
            <TabsTrigger
              key={value}
              value={value}
              className={cn(
                'border-r-2 border-white last:border-none text-[1.8rem] bg-theme text-white flex hover:opacity-70 transition-opacity items-center py-[2rem] px-[4rem]',
                arrowBottomCss,
              )}
            >
              {label}
            </TabsTrigger>
          )
        })}
      </TabsList>
      <TabsContent
        value="kyushu"
        className="text-center text-[2.4rem] bg-slate-200 py-[8rem] px-[2rem]"
      >
        <h3 className="mb-[4rem] font-bold text-[3rem]">九州です</h3>
        <div className="flex gap-[1.6rem]">
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスのマンション特集"
              description="現在販売中のほげハウスの中古マンション情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスの中古住宅特集"
              description="現在販売中のスムストックを含むほげハウスの中古住宅情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="オープンハウス物件特集"
              description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="chugoku_shikoku"
        className="text-center text-[2.4rem] bg-slate-200 py-[8rem] px-[2rem]"
      >
        <h3 className="mb-[4rem] font-bold text-[3rem]">中国・四国です</h3>
        <div className="flex gap-[1.6rem]">
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスのマンション特集"
              description="現在販売中のほげハウスの中古マンション情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスの中古住宅特集"
              description="現在販売中のスムストックを含むほげハウスの中古住宅情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="オープンハウス物件特集"
              description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="kansai"
        className="text-center text-[2.4rem] bg-slate-200 py-[8rem] px-[2rem]"
      >
        <h3 className="mb-[4rem] font-bold text-[3rem]">関西です</h3>
        <div className="flex gap-[1.6rem]">
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスのマンション特集"
              description="現在販売中のほげハウスの中古マンション情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスの中古住宅特集"
              description="現在販売中のスムストックを含むほげハウスの中古住宅情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="オープンハウス物件特集"
              description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="chubu"
        className="text-center text-[2.4rem] bg-slate-200 py-[8rem] px-[2rem]"
      >
        <h3 className="mb-[4rem] font-bold text-[3rem]">中部です</h3>
        <div className="flex gap-[1.6rem]">
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスのマンション特集"
              description="現在販売中のほげハウスの中古マンション情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスの中古住宅特集"
              description="現在販売中のスムストックを含むほげハウスの中古住宅情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="オープンハウス物件特集"
              description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="kanto"
        className="text-center text-[2.4rem] bg-slate-200 py-[8rem] px-[2rem]"
      >
        <h3 className="mb-[4rem] font-bold text-[3rem]">関東です</h3>
        <div className="flex gap-[1.6rem]">
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスのマンション特集"
              description="現在販売中のほげハウスの中古マンション情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスの中古住宅特集"
              description="現在販売中のスムストックを含むほげハウスの中古住宅情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="オープンハウス物件特集"
              description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
            />
          </div>
        </div>
      </TabsContent>
      <TabsContent
        value="tohoku_hokkaido"
        className="text-center text-[2.4rem] bg-slate-200 py-[8rem] px-[2rem]"
      >
        <h3 className="mb-[4rem] font-bold text-[3rem]">東北・北海道です</h3>
        <div className="flex gap-[1.6rem]">
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスのマンション特集"
              description="現在販売中のほげハウスの中古マンション情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="ほげハウスの中古住宅特集"
              description="現在販売中のスムストックを含むほげハウスの中古住宅情報をご覧いただけます。"
            />
          </div>
          <div className="w-1/3">
            <BasicCard
              title="オープンハウス物件特集"
              description="オープンハウス・現地見学会を開催している物件をご覧いただけます。"
            />
          </div>
        </div>
      </TabsContent>
    </Tabs>
  )
}
