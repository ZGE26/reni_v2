import React from 'react'

export default function Navbar() {
    return (
        <nav class="navbar navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" style={{display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center'}} href="#">
                    <img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24" class="d-inline-block align-text-top" />
                        ReNi
                </a>
                <div style={{display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center'}}>
                <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Contact</a>
                    
                    <a href="#" class="btn btn-secondary">Log in</a>
                </div>
            </div>
        </nav>

    )
}