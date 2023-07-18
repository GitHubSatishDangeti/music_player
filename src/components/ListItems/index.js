import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const ListItem = props => {
  const {itemDetails, deleteItem} = props
  const {id, imageUrl, name, genre, duration} = itemDetails

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div>
        <img src={imageUrl} alt="track" />
        <div>
          <p>{name}</p>
          <p>{genre}</p>
        </div>
        <div>
          <p>{duration}</p>
          <button type="button" onClick={onDelete} data-testid="delete">
            <AiOutlineDelete />
          </button>
        </div>
      </div>
    </li>
  )
}
export default ListItem
