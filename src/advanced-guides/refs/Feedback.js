import React from 'react';

const Feedback = React.forwardRef((props, ref) => {
  //some styles
  const styles = {
    backgroundColor: 'wheat',
    padding: '1rem',
    margin: '1rem 0'
  }

  return (
    <div ref={ref} style={styles}>
      Waiting for your payment...
    </div>
  );;
})

export default Feedback