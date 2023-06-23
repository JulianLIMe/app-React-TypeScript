import { Sub } from "../types"
import "../styles/List.css"

interface Props {
  subs: Array<Sub>
  msm: string
}

const List = (props: Props) => { // Using props whit TypeScript whitout React.FC<Types>, see AnChildren.tsx component

  const { subs, msm } = props
  console.log(msm)

  return (
    <div className="container-subs">
      {
        subs.map((sub, index) => {
          return (
            <div className="container-sub" key={index}>
              <img src={sub.avatar} alt={`Avatar for ${sub.nick}`} />
              <h4>{sub.nick} (<small>{sub.subMonth}</small>)</h4>
              <p>{sub.description?.substring(0, 100)}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default List