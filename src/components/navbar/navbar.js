const Navbar = () => {
    return (
        <nav className="flex flex-row justify-around pt-4 pb-2 items-center">
            <h3 className=" text-gray-700 font-bold text-2xl">UniCraft</h3>
            <ul className="basis-1/4 flex flex-row justify-between">
                <li className="text-gray-700 text-lg font-medium">How it works</li>
                <li className="text-gray-700 text-lg font-medium">Pricing</li>
                <li className="text-gray-700 text-lg font-medium">FAQ</li>
            </ul>
            <button className="text-gray-600 text-lg font-bold border-gray-600 rounded-lg border-2 w-36 h-12">Contact us</button>
        </nav>
    )
}

export default Navbar;