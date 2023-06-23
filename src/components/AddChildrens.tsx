import '../styles/AnChildren.css'

interface Props {
  title: string
  information: string
  fun: (message: string) => string
}

const AddChildrens: React.FC<Props> = (children) => { // FC = FunctionComponent

  const { title, information, fun } = children

  return (
    <div className='container-addChildrens'>
      <h2>{title}</h2>
      <p>{information}</p>
      <span>{fun('Prop function type')}</span>
    </div>
  )
}

export default AddChildrens