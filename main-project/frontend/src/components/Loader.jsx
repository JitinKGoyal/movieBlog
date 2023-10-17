import React from 'react'

function Loader({ height }) {
    return (
        <div><img src="/assets/img/icons/spinner.gif" alt="" style={{ height }} /></div>
    )
}

export default Loader