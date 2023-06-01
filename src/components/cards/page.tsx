import  CardComponent  from '../card/page';

export default function CardList(){
    return(
       <div className="h-screen w-screen bg-gray-400 flex justify-center items-center">
            <div className="h-2/3 w-2/3 bg-white overflow-auto p-2">
                <div className="text-5xl p-10">
                    <h1>Projetos</h1>
                </div>
                <div className="grid grid-cols-3 p-2 gap-2">
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                    <CardComponent/>
                </div>
            </div>
       </div>
        
    );
}