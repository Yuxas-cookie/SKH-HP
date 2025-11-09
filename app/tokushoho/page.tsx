import Link from "next/link";

export default function Tokushoho() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-navy via-blue-500 to-navy-light bg-clip-text text-transparent">
          特定商取引法に基づく表記
        </h1>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <table className="w-full">
            <tbody className="divide-y divide-gray-200">
              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700 w-1/3">
                  販売業者
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  株式会社SKH
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  代表責任者
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  片山 弘
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  所在地
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  〒565-0842 大阪府吹田市千里山東2-4-3-201
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  電話番号
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  090-3618-4320
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  メールアドレス
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  sekaino.hiroshi34@gmail.com
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  サイトURL
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <a
                    href="https://skh-hp.vercel.app"
                    className="text-blue-600 hover:text-blue-800 underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://skh-hp.vercel.app
                  </a>
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  商品販売価格
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  各商品ページに記載の金額
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  講座料金以外に<br />かかる料金
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>銀行振込手数料（銀行振込を選択した場合）</li>
                    <li>通信費等（インターネット接続料等はお客様のご負担となります）</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  支払方法
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <ul className="list-disc list-inside space-y-1">
                    <li>クレジットカード決済（VISA、Mastercard、JCB、AMEX、Diners）</li>
                    <li>銀行振込</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  支払時期
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <ul className="space-y-2">
                    <li>
                      <span className="font-semibold">クレジットカード決済：</span><br />
                      お申し込み時に決済処理されます
                    </li>
                    <li>
                      <span className="font-semibold">銀行振込：</span><br />
                      お申し込みから7日以内にお振込みください
                    </li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  サービス提供時期
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  お支払い確認後、3営業日以内を目安にwebコンテンツを配布いたします。
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  返金・解約
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold mb-2">＜クーリングオフについて＞</p>
                      <p className="text-gray-700 leading-relaxed">
                        本講座は特定商取引法に定める「特定継続的役務提供」に該当します。
                        契約書面を受け取った日から8日間以内であれば、書面によりクーリングオフが可能です。
                        クーリングオフを行った場合、お支払いいただいた代金は全額返金いたします。
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">＜お問い合わせ先＞</p>
                      <p className="text-gray-700">
                        返金・解約に関するご相談は、上記のメールアドレスまたは電話番号までお問い合わせください。
                      </p>
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  教材の返品・交換
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  本講座はオンライン配信サービスのため、原則として返品・交換はお受けできません。
                  ただし、当社の責に帰すべき事由により講座が受講できない場合は、速やかに対応いたします。
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  動作環境
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <ul className="list-disc list-inside space-y-1 text-gray-700">
                    <li>インターネット接続環境（推奨：光回線またはそれに準ずる高速回線）</li>
                    <li>Webブラウザ（Google Chrome、Safari、Microsoft Edge、Firefox の最新版）</li>
                    <li>Zoom等のビデオ会議ツール（質問会参加の場合）</li>
                    <li>PC、タブレット、スマートフォンいずれでも受講可能</li>
                  </ul>
                </td>
              </tr>

              <tr>
                <th className="bg-gray-50 px-6 py-4 text-left text-sm font-semibold text-gray-700">
                  表現、及び商品に<br />関する注意書き
                </th>
                <td className="px-6 py-4 text-sm text-gray-900">
                  <p className="text-gray-700 leading-relaxed">
                    本ページに掲載されている受講生の実績は、あくまで個人の成果や感想であり、
                    すべての方が同様の結果を得られることを保証するものではありません。
                    成果には個人差があります。
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/"
            className="inline-block bg-navy hover:bg-blue-800 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
          >
            トップページに戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
