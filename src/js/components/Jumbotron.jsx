import React from 'react'

export const Jumbotron = () => {
    return (
        <div className="p-5 mb-4 bg-body-tertiary rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">A Warm Welcome!</h1>
                <p className="col-md-8 fs-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed mi non leo cursus semper. Suspendisse eleifend scelerisque lacus rhoncus.</p>
                <button className="btn btn-primary btn-lg" type="button">Call to Action!</button>
            </div>
        </div>

    )
}
