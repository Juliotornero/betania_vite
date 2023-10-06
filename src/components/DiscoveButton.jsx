import arrow from '../assets/arrow.svg'

const DiscoverButton = () => {
  return (

        <button className="flex justify-center items-center bg-[#181818] hover:bg-gray-700 text-gray-800 py-2 px-4 rounded shadow uppercase font-work">
            <img src={arrow} alt="" />
        </button>

  )
}

export default DiscoverButton