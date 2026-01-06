import { ArrowRight, CheckCircle2, Users, Target, Clock, Zap, Trophy, Video, Megaphone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-900 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <img src="/logo-white2.png" alt="株式会社TW" className="h-10 w-auto" />
          <a
            href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold">
              無料相談はこちら
            </Button>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-slate-50">
          {/* Semi-transparent blue diagonal shape */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-blue-500/5 to-transparent transform -skew-y-6 origin-top-left"></div>
        </div>

        <div className="container mx-auto relative z-10 max-w-5xl">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 mb-8 px-6 py-3 bg-blue-600 rounded-full shadow-lg">
              <Video className="w-5 h-5 text-white" />
              <span className="text-white font-bold">西日本No.1の実績</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6 leading-tight text-slate-900">
              採用難・集客不足を、
              <br className="hidden md:block" />
              実績No.1のショート動画で解決。
            </h1>
            <p className="text-base md:text-lg text-slate-700 mb-10 leading-relaxed max-w-3xl mx-auto">
              運用社数40社以上。西日本No.1の実績で、貴社の『資産』となる動画を構築します。
            </p>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-blue-600 transition-all">
                <Trophy className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">40社以上</div>
                <div className="text-sm font-bold text-slate-900 mb-1">運用実績</div>
                <div className="text-xs text-slate-600">業界問わず多数の成功事例</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-blue-600 transition-all">
                <Target className="w-12 h-12 text-red-600 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-black text-red-600 mb-2">西日本No.1</div>
                <div className="text-sm font-bold text-slate-900 mb-1">圧倒的成果</div>
                <div className="text-xs text-slate-600">複数のジャンルで日本一を獲得</div>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg border border-slate-200 hover:border-blue-600 transition-all">
                <Clock className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <div className="text-4xl md:text-5xl font-black text-blue-600 mb-2">1ヶ月〜</div>
                <div className="text-sm font-bold text-slate-900 mb-1">安心の契約</div>
                <div className="text-xs text-slate-600">縛りなしで成果にコミット</div>
              </div>
            </div>

            <p className="text-sm text-slate-600 mb-4 font-semibold">まずは無料相談で、貴社の勝ち筋をご提案</p>
            <a
              href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-6 text-lg shadow-2xl hover:shadow-blue-600/50 transition-all"
              >
                LINEで無料相談する（30秒で完了）
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <p className="text-sm text-slate-500 mt-6">※ しつこい営業は一切ありません</p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-4">
            こんな<span className="text-blue-600">お悩み</span>ありませんか？
          </h2>
          <p className="text-center text-slate-600 mb-16">Common challenges we solve</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-white border-slate-200 p-8 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300">
              <Users className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">採用に苦戦している</h3>
              <p className="text-slate-600 leading-relaxed">
                求人広告では条件比較され、自社の良さが伝わらない。職場のリアルな温かさを伝えたい。
              </p>
            </Card>
            <Card className="bg-white border-slate-200 p-8 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300">
              <Megaphone className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">認知度を上げたい</h3>
              <p className="text-slate-600 leading-relaxed">
                良いサービスなのに知られていない。もっと多くの人に届けば、解決できる悩みがあるのに。
              </p>
            </Card>
            <Card className="bg-white border-slate-200 p-8 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300">
              <Target className="w-16 h-16 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">売上が伸び悩んでいる</h3>
              <p className="text-slate-600 leading-relaxed">
                SNSを使って見込み客を集めたいが、ノウハウがなく手探りの状態。集客を強化したい。
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-black mb-6 text-slate-900">
              なぜ<span className="text-blue-600">ショート動画</span>なのか？
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8">
              文字や静止画では伝わらない「空気感」「人柄」「熱量」が、動画なら一瞬で届きます。
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white border-slate-200 p-6 text-center hover:border-blue-600 hover:shadow-lg transition-all">
                <Video className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-slate-900">リアルな魅力が伝わる</h3>
                <p className="text-sm text-slate-600">職場の雰囲気や企業文化を、ありのままに伝えられる</p>
              </Card>
              <Card className="bg-white border-slate-200 p-6 text-center hover:border-blue-600 hover:shadow-lg transition-all">
                <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-slate-900">若年層に確実にリーチ</h3>
                <p className="text-sm text-slate-600">Z世代・ミレニアル世代の情報収集手段No.1</p>
              </Card>
              <Card className="bg-white border-slate-200 p-6 text-center hover:border-blue-600 hover:shadow-lg transition-all">
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-2 text-slate-900">拡散力が圧倒的</h3>
                <p className="text-sm text-slate-600">良いコンテンツは自然に広がり、認知が一気に拡大</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4">導入実績</h2>
          <p className="text-center text-slate-600 mb-16">Real results from real clients</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "社労士ジャンル日本1位",
                clientName: "ワタナベ社労士 様",
                followersLine1: "4.9万",
                followersLine2: "フォロワー",
                resultLine1: "月200件の",
                resultLine2: "問合せ",
                impact:
                  "開始半年で社労士ジャンルNo.1を達成。個人からの相談だけでなく、法人からの顧問契約・問い合わせも月5件以上獲得し、安定した集客基盤を構築。",
                image: "/2.png",
                link: "https://www.tiktok.com/@office.nabe?is_from_webapp=1&sender_device=pc",
              },
              {
                category: "弁護士ジャンル日本2位",
                clientName: "弁護士ビーノ 様",
                followersLine1: "4.9万",
                followersLine2: "フォロワー",
                resultLine1: "月900万円の",
                resultLine2: "売上増",
                impact:
                  "わずか30投稿で1.5万フォロワーを達成。SNS経由で毎月500〜900万円の売上アップを継続し、弁護士法人設立の大きな原動力に。",
                image: "/1.png",
                link: "https://www.tiktok.com/@binobengoshi?is_from_webapp=1&sender_device=pc",
              },
              {
                category: "精神科医ジャンル日本1位",
                clientName: "メンタルドクターSidow 様",
                followersLine1: "総フォロワー",
                followersLine2: "15万人",
                resultLine1: "1投稿",
                resultLine2: "278万再生",
                impact:
                  "精神科医ジャンルで日本1位。圧倒的な認知を獲得し、サービスのブランド力を最大化。100万再生超えを連発。",
                image: "/3.png",
                link: "https://www.tiktok.com/@dr_sidow?is_from_webapp=1",
              },
            ].map((item, index) => (
              <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="block group">
                <Card className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:border-blue-600 transition-all flex flex-col h-full">
                  <div className="aspect-[9/16] bg-gray-100 overflow-hidden flex items-center justify-center">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.clientName}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-3 self-start">
                      <span className="text-blue-700 text-xs font-bold">{item.category}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-slate-900 text-balance">{item.clientName}</h3>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-slate-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-slate-500 mb-2">フォロワー</div>
                        <div className="text-sm font-bold text-slate-900">
                          <span className="whitespace-nowrap">{item.followersLine1}</span>
                          <br />
                          <span className="whitespace-nowrap">{item.followersLine2}</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3 text-center">
                        <div className="text-xs text-slate-500 mb-2">主要成果</div>
                        <div className="text-sm font-bold text-blue-600">
                          <span className="whitespace-nowrap">{item.resultLine1}</span>
                          <br />
                          <span className="whitespace-nowrap">{item.resultLine2}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <h4 className="text-xs font-semibold text-slate-700 mb-2">ビジネスインパクト</h4>
                      <p className="text-slate-600 text-sm leading-relaxed text-pretty">{item.impact}</p>
                    </div>
                  </div>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section 1 */}
      <section className="py-16 px-4 bg-blue-600">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">
              実績豊富なプロが
              <br />
              貴社のアカウントを診断します。
            </h2>
            <a
              href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white hover:bg-slate-100 text-blue-600 font-bold px-10 py-6 text-lg">
                LINEで事例をもっと見る
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose TW Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-4">
            TWが<span className="text-blue-600">選ばれる理由</span>
          </h2>
          <p className="text-center text-slate-600 mb-16">Why choose TW - Comparison with general agencies</p>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="bg-white border border-slate-200 shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="px-6 py-4 text-left text-sm font-bold text-slate-900 bg-slate-50"></th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-slate-600 bg-slate-50">
                        一般的な代理店
                      </th>
                      <th className="px-6 py-4 text-center text-sm font-bold text-white bg-blue-600">TW</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">契約期間</td>
                      <td className="px-6 py-4 text-center text-slate-600">
                        <span className="text-red-600 font-semibold">6ヶ月〜1年</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 font-bold">1ヶ月〜縛りなし</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">月額費用</td>
                      <td className="px-6 py-4 text-center text-slate-600">
                        <span className="text-red-600 font-semibold">30万円〜</span>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 font-bold">9.9万円〜</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">実績</td>
                      <td className="px-6 py-4 text-center text-slate-600">様々</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 font-bold">西日本No.1</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">サポート体制</td>
                      <td className="px-6 py-4 text-center text-slate-600">月1回レポート</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 font-bold">専任担当者＋常時サポート</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-sm font-semibold text-slate-900">成果保証</td>
                      <td className="px-6 py-4 text-center text-slate-600">なし</td>
                      <td className="px-6 py-4 text-center">
                        <span className="text-blue-600 font-bold">成果が出なければ即解約OK</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
              <Card className="bg-white border border-slate-200 p-4 text-center hover:border-blue-600 hover:shadow-lg transition-all flex-shrink-0">
                <Clock className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-blue-600 font-black text-2xl mb-1">1ヶ月〜</div>
                <p className="text-slate-700 font-semibold text-xs">縛りなし契約</p>
              </Card>
              <Card className="bg-gradient-to-br from-blue-50 to-white border-2 border-blue-600 p-4 text-center shadow-lg flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-blue-600 font-black text-2xl mb-1">9.9万円〜</div>
                <p className="text-slate-700 font-semibold text-xs">圧倒的コスパ</p>
              </Card>
              <Card className="bg-white border border-slate-200 p-4 text-center hover:border-blue-600 hover:shadow-lg transition-all flex-shrink-0">
                <Trophy className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                <div className="text-blue-600 font-black text-2xl mb-1 leading-tight">西日本No.1</div>
                <p className="text-slate-700 font-semibold text-xs">実績多数</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-slate-900">
            <span className="text-blue-600">料金プラン</span>
          </h2>
          <p className="text-center text-slate-600 mb-4">Flexible plans for every business</p>
          <p className="text-center text-slate-900 font-bold text-lg mb-16">※ 全プラン契約期間の縛りなし</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Left: Entry Plan */}
            <Card className="bg-white border-slate-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-slate-100 rounded-full mb-4">
                  <span className="text-slate-700 text-sm font-bold">Plan A</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">エントリープラン</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">まずは素材作成から（制作のみ）</p>
                <div className="mb-6">
                  <span className="text-5xl font-black text-slate-900">9.9万円</span>
                  <span className="text-slate-600 ml-2">月額〜</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">月4本の動画制作</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">プロによる編集</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">サムネイル作成</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">基本的な企画提案</span>
                </li>
              </ul>
              <a
                href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold">
                  プランを選択
                </Button>
              </a>
            </Card>

            {/* Center: In-house Support Plan (Popular) */}
            <div className="relative md:-mt-4 md:mb-4">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                  人気No.1
                </div>
              </div>
              <Card className="bg-white border-2 border-blue-600 p-8 shadow-2xl shadow-blue-600/20 flex flex-col h-full">
                <div className="mb-6">
                  <div className="inline-block px-4 py-2 bg-blue-50 rounded-full mb-4">
                    <span className="text-blue-700 text-sm font-bold">Plan B</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">内製化支援プラン</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-4">社内にノウハウを（内製化支援）</p>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-slate-900">15万円</span>
                    <span className="text-slate-600 ml-2">月額〜</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8 flex-grow">
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">運用ノウハウ研修</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">撮影・編集指導</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">企画相談（無制限）</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">月1回の戦略MTG</span>
                  </li>
                </ul>
                <a
                  href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto"
                >
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold">プランを選択</Button>
                </a>
              </Card>
            </div>

            {/* Right: Standard Plan */}
            <Card className="bg-white border-slate-200 p-8 hover:border-blue-600 hover:shadow-lg transition-all duration-300 flex flex-col">
              <div className="mb-6">
                <div className="inline-block px-4 py-2 bg-slate-100 rounded-full mb-4">
                  <span className="text-slate-700 text-sm font-bold">Plan C</span>
                </div>
                <h3 className="text-2xl font-bold mb-2 text-slate-900">スタンダードプラン</h3>
                <p className="text-blue-600 font-semibold text-sm mb-4">丸投げで成果を出す（完全運用代行）</p>
                <div className="mb-6">
                  <span className="text-5xl font-black text-slate-900">45万円</span>
                  <span className="text-slate-600 ml-2">月額〜</span>
                </div>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">月10本の動画制作</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">撮影含む</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">アカウント運用代行</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">データ分析・改善提案</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-700">月1回のミーティング</span>
                </li>
                <li className="flex items-start text-sm text-slate-500">
                  <span className="ml-7">※ コメント対応は含まず</span>
                </li>
              </ul>
              <a
                href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto"
              >
                <Button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-900 font-bold">
                  プランを選択
                </Button>
              </a>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-black mb-6 text-white">まずは無料相談で、最適なプランを診断</h2>
            <p className="text-lg text-blue-100 mb-8">貴社に合った戦略をご提案します</p>
            <a
              href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-white hover:bg-slate-100 text-blue-600 font-bold px-10 py-6 text-lg">
                LINEで無料相談する（30秒）
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center mb-8">
              <img src="/logo-colored.png" alt="株式会社TW" className="h-16 md:h-20" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-6">
              私たちの<span className="text-blue-600">想い</span>
            </h2>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-slate-700">
              ショート動画は『社会インフラ』になる
            </h3>
            <div className="bg-white border border-slate-200 rounded-lg p-8 md:p-12 shadow-sm">
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                私たちは、ショート動画に誇りを持っています。
                <br />
                ただ動画を作るだけではなく、
                <span className="text-slate-900 font-bold">『社会インフラ』</span>
                を構築しているという信念のもと、日々挑戦しています。
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                <span className="text-slate-900 font-bold">正しい情報が、人を救う。</span>
                <br />
                あなたの専門的な価値を、それを必要としている人に届けるパートナーでありたい。 それが私たちの使命です。
              </p>
              <p className="text-lg text-slate-700 leading-relaxed mb-6">
                今後、ショート動画はテレビやGoogleのように、誰もが情報を得るための
                <span className="text-slate-900 font-bold">インフラ</span>
                になると確信しています。 だからこそ、視聴者に本当に価値のあるコンテンツを届けることが、
                最も効果的な認知拡大・採用強化につながると考えています。
              </p>
              <p className="text-xl text-slate-900 font-bold text-center mt-8">あなたのビジネスを、次のステージへ。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow Section */}
      <section className="py-20 px-4 bg-slate-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center text-slate-900 mb-4">
            ご利用の<span className="text-blue-600">流れ</span>
          </h2>
          <p className="text-center text-slate-600 mb-16">Simple 5-step process</p>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: "01",
                  title: "お問い合わせ",
                  description: "フォームから30秒で簡単にお問い合わせいただけます。",
                },
                {
                  step: "02",
                  title: "無料Zoom相談",
                  description: "現状の課題をヒアリングし、最適な戦略をご提案します。",
                },
                {
                  step: "03",
                  title: "ご提案・ご契約",
                  description: "具体的なプランと見積もりをご提示。納得いただけたらご契約。",
                },
                {
                  step: "04",
                  title: "アカウント設定",
                  description: "最適なアカウント設計と初期設定を行います。",
                },
                {
                  step: "05",
                  title: "運用スタート",
                  description: "動画制作・投稿を開始。効果測定しながら改善を繰り返します。",
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  {index !== 4 && <div className="absolute left-12 top-20 w-0.5 h-12 bg-slate-300" />}
                  <Card className="bg-white border-slate-200 p-6 hover:border-blue-600 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-black text-white">{item.step}</span>
                        </div>
                      </div>
                      <div className="flex-1 pt-4">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-700 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-5xl font-black text-center mb-4 text-slate-900">
            <span className="text-blue-600">よくある質問</span>
          </h2>
          <p className="text-center text-slate-600 mb-16">Frequently asked questions</p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "本当に1ヶ月で解約できますか？",
                  answer:
                    "はい、可能です。最低契約期間の縛りは一切ございません。ただし、効果を実感いただくには3ヶ月程度の継続をおすすめしています。",
                },
                {
                  question: "動画に出演する必要はありますか？",
                  answer:
                    "必須ではありません。キャスト手配やナレーション、テキストベースの動画など、様々な手法をご提案できます。顔出しなしでも効果的な運用が可能です。",
                },
                {
                  question: "他の運用代行会社との違いは何ですか？",
                  answer:
                    "①1ヶ月契約の柔軟性 ②有益コンテンツへのこだわり ③業界特化の実績とノウハウ の3点が大きな違いです。特に士業・採用分野での実績は圧倒的です。",
                },
                {
                  question: "どのくらいで効果が出ますか？",
                  answer:
                    "業種や目的により異なりますが、多くの場合2〜3ヶ月で問い合わせ増加などの効果を実感いただいています。初月から手応えを感じるケースも少なくありません。",
                },
                {
                  question: "地方の企業でも対応可能ですか？",
                  answer:
                    "はい、全国対応しております。ZoomやChatworkなどのオンラインツールを活用し、遠隔でも密なコミュニケーションを取りながら運用いたします。",
                },
              ].map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-slate-200 rounded-lg px-6 data-[state=open]:border-blue-600"
                >
                  <AccordionTrigger className="text-left text-lg font-bold text-slate-900 hover:text-blue-600 hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-700 leading-relaxed pt-2">{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img src="/logo-white" alt="株式会社TW" className="h-16 md:h-20" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              ショート動画で、
              <br />
              ビジネスを次のステージへ。
            </h2>
            <p className="text-xl text-slate-200 mb-8">まずは無料相談から。30秒で完了します。</p>
            <a
              href="https://line.me/R/ti/p/@922xylnx?ts=11251237&oat_content=url"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-12 py-6 text-xl">
                今すぐ無料相談を申し込む
                <ArrowRight className="ml-2" />
              </Button>
            </a>
            <p className="text-sm text-slate-400 mt-6">※ 契約の縛りなし | しつこい営業なし | 相談は完全無料</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <img src="/logo-white2.png" alt="株式会社TW" className="h-16 md:h-20" />
              <p className="text-slate-400 mt-6 text-balance">
                株式会社TWは、ショート動画運用代行・動画制作・研修のプロフェッショナルです。
              </p>
            </div>
            <div className="border-t border-slate-800 pt-8 text-center">
              <img src="/logo-white2.png" alt="株式会社TW" className="h-12 mb-6" />
              <p className="text-slate-500 text-sm">© 2025 株式会社TW. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
