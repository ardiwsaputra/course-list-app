import Footer from './components/Footer';
import Section from './components/Section';


function App() {
  const navItem = ['Menu 1', 'Menu 2', 'Menu 3'];

  const contents = [
    {
      title: 'Laravel',
      content: 'Ini adalah paragraf dalam section 1.',
      price: 'Rp. 80.000',
    },
    {
      title: 'Flutter',
      content: 'Ini adalah paragraf dalam section 2.',
      price: 'Rp. 200.000',
    },
    {
      title: 'React JS',
      content: 'Ini merupkan salah satu contoh react.',
      price: 'Rp. 300.000',

    },
     {
      title: 'React Native',
      content: 'Ini merupkan salah satu contoh react.',
      price: 'Rp. 130.000',
    },
     {
      title: 'Golang',
      content: 'Ini merupkan salah satu contoh react.',
      price: 'Rp. 120.000',
    }
  ]

  return (
    <>
      <header className='bg-[#152A46] text-white py-[28px] px-[120px] flex justify-between'>
        <h1 className='text-[20px] font-[700px]'>LOGO</h1>
        <nav>
            <ul className='m-0 p-0 justify-items-end list-none'>
                {navItem.map(item => <li className='inline-block mr-[10px]' key={item}><a className='text-white ' href="#">{item}</a></li>)}
            </ul>
        </nav>
      </header>
      <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-[20px]'>
        {contents.map(item => (
          <Section key={item.title} title={item.title} content={item.content} price={item.price} />
        ))}
      </div>
      <Footer />
    </>
  )
}

export default App
