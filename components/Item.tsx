import * as React from 'react'
import { useInView } from 'react-intersection-observer'


const Item = (props: { title: string, children: React.ReactElement }) => {
    const { title, children } = props
    const [act, setAct] = React.useState("")
    const toggleFunc = () => act ? setAct("") : setAct("act")
    const [ref, inView] = useInView();
    React.useEffect(() => {
        inView ? setAct("act") : setAct("")
    }, [inView])
    return (
        <div className="item">
            <div className="item__content">
                <div className="item__title">{title}</div>
                <div ref={ref} className={"item__inner " + act} onClick={toggleFunc}>
                    {children}
                </div>
            </div>
            <div className="item__img"></div>
        </div>
    )
}


export default Item

