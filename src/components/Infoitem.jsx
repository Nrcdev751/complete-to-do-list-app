import React from 'react'


// img
import infosym from '../assets/info-mark.svg'
import btnx from '../assets/x-icon.svg'
import pen from '../assets/edit-pen-icon.svg'
import bin from '../assets/recycle-bin-icon.svg'
import plus from '../assets/plus-icon.svg'


const Info = ({open,onClose }) => {
  if (!open) return null
  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      >
      
  
      
        <div className="info-wrapper ani-pop">
                <div className="info-title">
                  <img src={infosym} width={35} alt="" />
                  <p>สัญลักษณ์ประกอบการใช้งาน</p>
                  <button onClick={onClose}>
                    <img src={btnx}  alt="" />
                  </button>
                </div>
            <div className="info-card ani">
              <button  onClick={onClose} className="cross-btn"><img src={btnx} width={15} alt="" /></button>
                <div className="info-body">
                 <div className="info-gap">
                  <div className="info-item">
                      <img src={pen} className="grey " width={15} alt="" />
                      <p>สัญลักษณ์สำหรับแก้ไขรายการ</p>
                    </div>
                  <hr/>
                 </div>
                 <div className="info-gap">
                  <div className="info-item">
                      <img src={bin} className="grey" width={15} alt="" />
                      <p>สัญลักษณ์สำหรับลบรายการ</p>
                    </div>
                  <hr/>
                 </div>
                 <div className="info-gap">
                  <div className="info-item">
                      <img src={plus} className="grey" width={15} alt="" />
                      <p>สัญลักษณ์สำหรับเพิ่มรายการ</p>
                    </div>
                  <hr/>
                 </div>
                  <div className="info-gap2">
                      <div className="info-item">
                            <div className="task-group">
                            <input type="checkbox" className="checkbox" checked/>
                            <label className="label">
                              <p className="checkmark"></p>
                            </label>
                          </div>
                          <p>สัญลักษณ์เมื่อรายการนั้นยังไม่สำเร็จ</p>
                       </div>
                  </div>
                  <div className="info-gap">
                      <div className="info-item">
                            <div className="task-group">
                            <input type="checkbox" disabled className=""/>
                        
                          </div>
                          <p>สัญลักษณ์เมื่อรายการนั้นสำเร็จแล้ว</p>
                       </div>
                  </div>
                </div>
            </div>
        </div>
   
        

   
    </div>
  )
}

export default Info