import * as C from './styles';
import { Home, Search } from '../../svgs/index';

type Props = {
    setGenre: (e: string) => void;
    setIsSearch:(e: boolean) => void;
    setIsFull:(e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void;  
}

export const Sidebar = ({ setGenre, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar }: Props) => {
    return (
        <C.Container isSidebar={isSidebar}>   
            <div className='inicialSearch'>
                <div 
                onClick={() => (setGenre(''), setIsSearch(false), setIsFull(false), setIsSidebar(false))} 
                className='iniSearDivs'>
                    <p><Home/></p> Home
                </div>

                <div 
                onClick={() => (setIsSearch(!isSearch), setIsSidebar(false))}className='iniSearDivs'>
                    <p><Search /></p> Search
                </div>
            </div>

            <div className='genres'>
                <h2>Subjects</h2>
                <div 
                onClick={() => (setGenre('History') ,setIsSidebar(false), 
                setIsSearch(false))}>
                    History
                </div>
                <div 
                onClick={() => (setGenre('English') ,setIsSidebar(false), setIsSearch(false))}>
                    English
                </div>
                <div 
                onClick={() => (setGenre('Geography') ,setIsSidebar(false), setIsSearch(false))}>
                    Geography
                </div>
                <div 
                onClick={() => (setGenre('Economics') ,setIsSidebar(false), setIsSearch(false))}>
                    Economics
                </div>
                
            </div>
            <div>
                    <a style={{textDecoration: "none", color:"black"}} href="#"><h2 style={{marginLeft:"1rem"}}>Premium</h2></a>
            </div>
        </C.Container>
    )
} 