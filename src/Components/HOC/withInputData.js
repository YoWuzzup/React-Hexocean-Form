import React from 'react'

const  withInputData = (WrappedComponent, props) => {
    console.log(props);
    return (props) => (
        <div >
            <WrappedComponent {...props} />
        </div>
    );
}

export default withInputData