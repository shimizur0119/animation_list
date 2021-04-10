// import Link from 'next/link'
import Layout from '../components/layout/Layout'
import Item from "../components/Item"

const IndexPage = () => (
  <Layout title="index">
    <div className="container">
      <div className="container__inner">
        <Item title="ヨコにシュッってなるやつ">
          <div className="animation-text-1">
            <div className="animation-text-1__inner">Done is better than perfect.</div>
          </div>
        </Item>
        <Item title="フワってヨコからくるやつ">
          <div className="animation-text-2">
            お前も鬼にならないか？
          </div>
        </Item>
        <Item title="ドカーンってくるやつ">
          <div className="animation-text-3">
            撃っていいのは<br />撃たれる覚悟のあるやつだけだ
          </div>
        </Item>
        <Item title="ゆるーく集合">
          <div className="animation-text-4">
            キミの敗因はメモリの無駄遣い
          </div>
        </Item>
        <Item title="ぐるっと１周">
          <div className="animation-text-5">
            <div className="animation-text-5__border1"></div>
            <div className="animation-text-5__border2"></div>
            <div className="animation-text-5__border3"></div>
            <div className="animation-text-5__border4"></div>
            力以外の序列はつまらんな
          </div>
        </Item>
        <Item title="真ん中からタイプライター">
          <div className="animation-text-6">
            <div className="animation-text-6__inner">
              他人に借りを作るべからず
            </div>
          </div>
        </Item>
        <Item title="ぴょこっとウェーブ">
          <div className="animation-text-7">
            <div className="animation-text-7__inner">
              次回「城之内、死す」
            </div>
          </div>
        </Item>
      </div>

    </div>
    <div>メイン</div>
    <img src="/static/img/img_man_1.svg" alt="" />
  </Layout>
)

export default IndexPage
