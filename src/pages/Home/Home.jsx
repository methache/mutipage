import './Home.css';

function Home() {
    return (
        <div className='home-container'>
            {/* สติกเกอร์ด้านบนซ้าย */}
            <div className='sticker-left'>
                <i className="bi bi-stars"></i>
            </div>

            {/* สติกเกอร์ด้านบนขวา */}
            <div className='sticker-right'>
                <i className="bi bi-stars"></i>
            </div>

            <h1>My Safe Space</h1>

           <img src='../public/555.png' className='home-img'/>

            <p className='btn btn-warning'>
                สวัสดีทุกท่าน! ผมชื่อ เมธาพร ทองนาค อายุ 20 ปี เป็นคนที่สนใจในเทคโนโลยี
                และตอนนี้ผมกำลังทำงานหรือศึกษาเกี่ยวกับ IT.
            </p>

            <p className='btn btn-warning'>
                ผมชอบใช้เวลาว่างในการอ่านหนังสือ การออกกำลังกาย และมักจะตั้งเป้าหมายในการพัฒนาตัวเองอยู่เสมอ
                ขอบคุณที่เข้ามาทำความรู้จักกันครับ!
            </p>
            <div className='sticker'>
                <i className="bi bi-stars"></i>
            </div>
        </div>
    );
}

export default Home;
