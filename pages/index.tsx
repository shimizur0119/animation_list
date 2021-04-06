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
        <div className="item">
          <div className="item__content">
            <div className="item__title">よこにシュッってなるやつ</div>
            <div className="item__inner">
              <div className="anime-text-1">
                <div className="anime-text-1__inner">
                  Done is better than perfect.
                </div>
              </div>
            </div>
          </div>
          <div className="item__img"></div>
        </div>
        <div className="item">
          <div className="item__content">
            <div className="item__title">よこにシュッってなるやつ</div>
            <div className="item__inner">
              <div className="anime-text-1">
                <div className="anime-text-1__inner">
                  Done is better than perfect.
              </div>
              </div>
            </div>
          </div>
          <div className="item__img"></div>
        </div>
        <div className="item">
          <div className="item__content">
            <div className="item__title">よこにシュッってなるやつ</div>
            <div className="item__inner">
              <div className="anime-text-1">
                <div className="anime-text-1__inner">
                  Done is better than perfect.
              </div>
              </div>
            </div>
          </div>
          <div className="item__img"></div>
        </div>
        <div className="item">
          <div className="item__content">
            <div className="item__title">よこにシュッってなるやつ</div>
            <div className="item__inner">
              <div className="anime-text-1">
                <div className="anime-text-1__inner">
                  Done is better than perfect.
              </div>
              </div>
            </div>
          </div>
          <div className="item__img"></div>
        </div>
        <div className="item">
          <div className="item__content">
            <div className="item__title">よこにシュッってなるやつ</div>
            <div className="item__inner">
              <div className="anime-text-1">
                <div className="anime-text-1__inner">
                  Done is better than perfect.
              </div>
              </div>
            </div>
          </div>
          <div className="item__img"></div>
        </div>
      </div>

    </div>
    <div>メイン</div>
    <img src="/static/img/img_man_1.svg" alt="" />
  </Layout>
)

export default IndexPage
