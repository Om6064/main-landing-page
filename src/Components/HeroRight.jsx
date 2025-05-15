

const HeroRight = () => {
    return (
        <div>
            <div className='d-flex align-items-center justify-content-center position-relative'>
                <img src="https://zoyothemes.com/tailwind/evea/assets/images/furniture.png" alt="" height={600} />
            </div>

            <div className='subhero bg-white d-flex align-items-center gap-3 rounded-pill p-2 position-absolute'>
                <div className='blue-circle bg-button rounded-circle d-flex align-items-center justify-content-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="codesandbox" class="lucide lucide-codesandbox h-6 w-6 text-white"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
                </div>
                <div className='align-items-center'>
                    <p className='m-0 fw-semibold'>Express Delivery Service</p>
                </div>
            </div>
            <div className='subhero1 bg-white d-flex align-items-center gap-3 rounded-pill p-2 position-absolute'>
                <div className='blue-circle bg-button rounded-circle d-flex align-items-center justify-content-center'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="headset" class="lucide lucide-headset h-6 w-6 text-white"><path d="M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z"></path><path d="M21 16v2a4 4 0 0 1-4 4h-5"></path></svg>
                </div>
                <div className='align-items-center'>
                    <p className='m-0 fw-semibold'>24x7 Customer Support</p>
                </div>
            </div>
        </div>
    )
}

export default HeroRight