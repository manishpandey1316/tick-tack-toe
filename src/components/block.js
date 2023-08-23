import "./block.css"
const Block = ({onClick,id})=>
{
    let symbol="square symbol"+id
    return(
        <>
          <div onClick={onClick} className={symbol} >
          </div>
        </>
    )
}
export default Block