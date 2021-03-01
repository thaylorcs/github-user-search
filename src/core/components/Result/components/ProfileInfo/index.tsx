import './style.css';

type Props = {
    field: string;
    value: string;
}

const ProfileInfo = ({field, value} : Props) => {

    return (
        <div className="info-value">
            <p className="info-title">{field}: <span className="value">{value}</span></p>
        </div>
    );
}

export default ProfileInfo;