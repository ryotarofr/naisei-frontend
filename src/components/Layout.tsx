import { useEffect, useState } from 'react';
import axios from 'axios';
import CreateNaiseiForm from './CreateNaiseiForm';

interface Item {
  id: number;
  naisei: string;
  // 他のプロパティがあればここに追加
}

export const Layout = () => {

  const [data, setData] = useState<Item[]>([]);
  useEffect(() => {
    // APIのエンドポイントを指定
    const apiUrl = 'http://localhost:3000/naisei';


    // Axiosを使用してAPIデータをフェッチ
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); // 空の配列を渡すことで、コンポーネントがマウントされたときにのみ実行されるようにします。

  return (
    <div>
      <h1>APIデータフェッチ</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.naisei}</li>
        ))}
      </ul>
      <div>内省を作成</div>
      <CreateNaiseiForm />
    </div>
  );
}

