const activeBtn = {
    backgroundColor: '#149ddd',
}

const DotBtn = (props) => {
  let active = props.active;
  
  if(props.active  === 'active'){
    active = activeBtn;
  }
  return (
    <a href style={{
      cursor: 'pointer',
      margin: '0 5px',
      display: 'inline-flex',
      width: '12px',
      height: '12px',
      background: '#d6d6d6',
      borderRadius: '50%',
      alignItems: 'center',
      justifyContent: 'center',
      ...active,
    }}>
    </a>
  )
}

export default DotBtn;