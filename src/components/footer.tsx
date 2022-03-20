import { Link } from "react-router-dom";

const Footer = () =>{
   return(
        <div className="w-full fixed h-24 bottom-0">
            <div className="flex border shadow-lg px-3 py-1 rounded-xl bg-white m-2 h-20">
                <Link to="/" className="flex-1 flex flex-col items-center">
                    <svg className="flex-1 my-2 fill-violet-400 bg-violet-100  rounded-xl p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 336c0 8.844-7.156 16-16 16h-96C199.2 352 192 344.8 192 336V288H0v144C0 457.6 22.41 480 48 480h416c25.59 0 48-22.41 48-48V288h-192V336zM464 96H384V48C384 22.41 361.6 0 336 0h-160C150.4 0 128 22.41 128 48V96H48C22.41 96 0 118.4 0 144V256h512V144C512 118.4 489.6 96 464 96zM336 96h-160V48h160V96z"/></svg>
                    <p className="text-gray-700 text-2xs">MY PROJECTS</p>
                </Link>

                <Link to="/gallery" className="flex-1 flex flex-col items-center">
                    <svg className="flex-1 my-2 fill-violet-400 bg-violet-100 rounded-xl p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M500.3 443.7l-119.7-119.7c27.22-40.41 40.65-90.9 33.46-144.7C401.8 87.79 326.8 13.32 235.2 1.723C99.01-15.51-15.51 99.01 1.724 235.2c11.6 91.64 86.08 166.7 177.6 178.9c53.8 7.189 104.3-6.236 144.7-33.46l119.7 119.7c15.62 15.62 40.95 15.62 56.57 0C515.9 484.7 515.9 459.3 500.3 443.7zM79.1 208c0-70.58 57.42-128 128-128s128 57.42 128 128c0 70.58-57.42 128-128 128S79.1 278.6 79.1 208z"/></svg>
                    <p className="text-gray-700 text-2xs">SEARCH</p>
                </Link>

                <Link to="/messages" className="flex-1 flex flex-col items-center relative">
                    <div className="absolute right-2 top-1 w-4 h-4 rounded-full bg-red-500">
                        <p className="text-white text-xs text-center">1</p>
                    </div>
                    <svg className="flex-1 my-2 fill-violet-400 bg-violet-100 rounded-xl p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M511.1 63.1v287.1c0 35.25-28.75 63.1-64 63.1h-144l-124.9 93.68c-7.875 5.75-19.12 .0497-19.12-9.7v-83.98h-96c-35.25 0-64-28.75-64-63.1V63.1c0-35.25 28.75-63.1 64-63.1h384C483.2 0 511.1 28.75 511.1 63.1z"/></svg>
                    <p className="text-gray-700 text-2xs">MESSAGES</p>
                </Link>

                <Link to="/notifications" className="flex-1 flex flex-col items-center relative">
                    <svg className="flex-1 my-2 fill-violet-400 bg-violet-100  rounded-xl p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M256 32V51.2C329 66.03 384 130.6 384 208V226.8C384 273.9 401.3 319.2 432.5 354.4L439.9 362.7C448.3 372.2 450.4 385.6 445.2 397.1C440 408.6 428.6 416 416 416H32C19.4 416 7.971 408.6 2.809 397.1C-2.353 385.6-.2883 372.2 8.084 362.7L15.5 354.4C46.74 319.2 64 273.9 64 226.8V208C64 130.6 118.1 66.03 192 51.2V32C192 14.33 206.3 0 224 0C241.7 0 256 14.33 256 32H256zM224 512C207 512 190.7 505.3 178.7 493.3C166.7 481.3 160 464.1 160 448H288C288 464.1 281.3 481.3 269.3 493.3C257.3 505.3 240.1 512 224 512z"/></svg>
                    <p className="text-gray-700 text-2xs">NOTIFICATIONS</p>
                </Link>

                <Link to="/me" className="flex-1 flex flex-col items-center">
                    <svg className="flex-1 my-2 fill-violet-400 bg-violet-100  rounded-xl p-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256c70.7 0 128-57.31 128-128s-57.3-128-128-128C153.3 0 96 57.31 96 128S153.3 256 224 256zM274.7 304H173.3C77.61 304 0 381.6 0 477.3c0 19.14 15.52 34.67 34.66 34.67h378.7C432.5 512 448 496.5 448 477.3C448 381.6 370.4 304 274.7 304z"/></svg>
                    <p className="text-gray-700 text-2xs">PROFILE</p>
                </Link>
            </div>
        </div>
    )
}
export default Footer;
