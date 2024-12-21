import './skeleton.css'

function Skeleton({height, width, variant}) {

    const styles = {
        height,
        width
    }
  return (
    <>
    <span className={`skeleton ${variant}`} style={styles}></span>
    </>
  )
}

export default Skeleton