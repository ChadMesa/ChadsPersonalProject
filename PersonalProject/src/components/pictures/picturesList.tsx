import * as React from "react";
import { IPicturesEntity } from "../../components/pictures/instagramPics";
import * as moment from "moment";

interface IPicturesView<T> {
    picturesEntity?: IPicturesEntity
    dataItems?: T[];
}

export const PicturesList: React.StatelessComponent<IPicturesView<IPicturesEntity>> = (props: IPicturesView<IPicturesEntity>) => {
    return (
        <React.Fragment>
            <div className="container">
                <div className="row top-line animate-box">
                    <div className="col-md-6 text-center animate-box pull-left">
                        <a className="work" href="portfolio_detail.html">
                            <img style={{height: '360px', width: '360px'}} src="/content/images/instagram-logo1.png" />
                        </a>
                    </div>
                    <div className="col-md-6 text-left fh5co-heading pull-right">
                        <h2>Photos</h2>
                        <h3>by Chad Mesa</h3>
                    </div>
                </div>
                <div className="row">
                    {props.dataItems.map(buildPic(props))}
                </div>
            </div>
        </React.Fragment>
    )
}
const buildPic = (props: IPicturesView<IPicturesEntity>) => (itm: IPicturesEntity, ndx: number) => {
    const workGrid: React.CSSProperties = {
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        height: '300px',
        marginBottom: '20px'
    }
    return (
        <div key={ndx}>
            <div className="col-md-4 text-center">
                <img className="work-grid" src={itm.PictureUrl} style={workGrid} />
            </div>
        </div>
    )
}

