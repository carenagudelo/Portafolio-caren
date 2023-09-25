import "./contact.scss";
import { LinkedinOutlined, MailOutlined, WhatsAppOutlined } from '@ant-design/icons';

const Contact = () => {
    return (
        <div className="contact_container" id="contact">
            <h2>Contact me</h2>
            <div className="icons_container">
                <div className="linkedin">
<LinkedinOutlined style={{ fontSize: '40px', color: '#725d5d' }} />
<a href="www.linkedin.com/in/caren-agudelo-73b813240" target="_blank"><h4>Caren Agudelo</h4></a>
</div>
<br />
<div className="email">
<MailOutlined style={{ fontSize: '40px', color: '#725d5d' }} />
<h4>karenagudelo11@gmail.com</h4>
</div>
<br />
<div className="whatsapp">
<WhatsAppOutlined style={{ fontSize: '40px', color: '#725d5d' }} />
<h4>+57 3013700104</h4>
</div>




            </div>
        </div>
    )
}

export default Contact;