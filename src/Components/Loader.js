import style from '../Components/Loader.module.css'
export const LoadingBar = () => {
    return <div className='m-auto'><div  className={`${style.loading} `}></div></div>;
  };