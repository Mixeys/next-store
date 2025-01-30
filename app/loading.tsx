import React from 'react'
import { Loader } from 'lucide-react'

const LoadingPage = () => {
	return (
		<div className="flex justify-center items-center h-screen w-screen">
			<Loader size={100} className="animate-[spin_3s_linear_infinite]" />
		</div>
	)
}

export default LoadingPage
