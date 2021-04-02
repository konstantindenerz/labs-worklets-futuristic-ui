import './badge.component.css';

export const badgeComponentFactory = ({value}) => {
    import('../edge/edge.registration');
    import('../circles/circles.registration');
    const host = document.createElement('badge');
    host.innerText = value;
    return host;
}
