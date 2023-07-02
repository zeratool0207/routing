import React, {useEffect, useState} from 'react';
import axios from 'axios';

function App() {
   const [list, setList] = useState([]);

    useEffect(() => {
        axiosGet();
    }, []);

    const axiosGet = async () => {
        try {
          const response = await axios.get(
            "/api/menu/list"
          );
        //   setList(response.data)
        // console.log(response.data);
        setList(response.data);
        console.log(response.data);
        } catch (e) {
          console.log(e);
        }
      };



    const btnTest = () => {
        console.log('this is menu:' + list);
    }

    return (
        <div>
            백엔드에서 가져온 데이터입니다 : 
            {list.map((item) => (

                <>
                    {/* <h3>{item.men_disp_no}</h3> */}
                    <h3 onClick={() => alert(item.men_url)}>{item.men_name}</h3>
                    {/* <h3>{item.men_up_no}</h3>
                    <h3>{item.men_id}</h3>
                    <h3>{item.men_name}</h3> */}
                </>

            ))}
            <button onClick={btnTest}>테스트</button>
            
        </div>
    );
}

export default App;