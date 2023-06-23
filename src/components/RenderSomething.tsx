import '../styles/RenderSomething.css'

interface Props {
  things: string[]
}

const RenderSomething = ({ things }: Props) => {

  const renderString = (i: number): JSX.Element => {
    return(
      <p>{`index ${i}`}</p>
    )
  }

  const renderList = (): JSX.Element[] => {
    return things.map((e, index) => {
      return (
        <div key={index}>
          <h4>{e}</h4>
          {renderString(index)}
        </div>
      )
    })
  }

  return (
    <div className="container-render">
      {renderList()}
    </div>
  )
}

export default RenderSomething