import Link from "next/link";

function Header() {
	return (
		<div>
			<h1 className='bg-primary text-4xl text-center  ml-16'>
				Vinny Shipley Personal Website
			</h1>

			<nav className='flex justify-center space-x-20 focus:bg-black'>

						<Link href='/blog'>To Blog Page</Link>

						<Link href='/projects'>To Projects Page</Link>

					</nav>
		</div>
	);
};

export default Header;
