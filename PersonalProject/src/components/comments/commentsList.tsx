import * as React from "react";
import { ICommentsEntity } from "../../components/comments/commentsForm"
import * as moment from "moment";

interface ICommentsView<T> {
    commentsEntity?: ICommentsEntity
    dataItems?: T[];
    showEditButton?: boolean;
    showDeleteButton?: boolean;
    onButtonClick: (id: number, action: string) => void;
    buttonDisabled?: boolean;
}

export const CommentsList: React.StatelessComponent<ICommentsView<ICommentsEntity>> = (props: ICommentsView<ICommentsEntity>) => {
    return (
        <React.Fragment>
            <div className="well" style={{ background: '#edebe8' }}>
                {props.dataItems.map(buildComment(props))}
            </div>
        </React.Fragment>
    )
}
const buildComment = (props: ICommentsView<ICommentsEntity>) => (itm: ICommentsEntity, ndx: number) => {
    let fromNow = moment.utc(itm.CreatedDate).fromNow()
    return (
        <React.Fragment key={ndx}>
            <div className="row">
                <div className="col-md-3">
                    <p><strong>{itm.Username}</strong> <span style={{ color: '#A9A9A9' }}>{fromNow}</span></p>
                </div>
                <div className="pull-right">
                    <div className="col-md-3">
                        <a href="javascript:;" onClick={buttonClick(props, itm.Id, "edit")}>Edit</a>
                    </div>
                    <div className="col-md-3">
                        <a href="javascript:;" onClick={buttonClick(props, itm.Id, "delete")}>Delete</a>
                    </div>
                </div>
            </div>
            <div>
                {itm.CommentText}
            </div>
            <hr />
        </React.Fragment>
    )
}

const buttonClick = (props: ICommentsView<ICommentsEntity>, id: number, action: string) => (e: React.MouseEvent<{}>) => {
    props.onButtonClick(id, action);
}
