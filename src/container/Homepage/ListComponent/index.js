import React from "react"
import { Paper, Grid, TableContainer, Table, TableHead, TableRow, TableBody, TableCell, Avatar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { staticData } from "../../../constants"

export default class Listcomponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [...staticData],
            currentPage: 1,
            todosPerPage: 3
        };
    }

    handleClick = (e) => {
        this.setState({
            currentPage: Number(e.target.id)
        });
    }

    render() {
        const { todos, currentPage, todosPerPage } = this.state;

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * todosPerPage;
        const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
        const currentTodos = todos.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((todo, index) => {
            return <React.Fragment key={index}>
                <ListData {...todo} index={index} />
            </React.Fragment>;
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(todos.length / todosPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            let isActive = number === currentPage;
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                    className={isActive ? "active" : ""}
                >
                    {number}
                </li>
            );
        });

        return (
            <Grid container >
                <Grid item xs={12}>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>#</StyledTableCell>
                                    <StyledTableCell>Image</StyledTableCell>
                                    <StyledTableCell>First Name</StyledTableCell>
                                    <StyledTableCell>Last Name</StyledTableCell>
                                    <StyledTableCell>Email</StyledTableCell>
                                    <StyledTableCell>Ph Number</StyledTableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {renderTodos}
                            </TableBody>

                        </Table>
                    </TableContainer>
                </Grid>

                <Grid item xs={12} className="pagination">
                    <ul className="page-numbers">
                        {renderPageNumbers}
                    </ul>
                </Grid>

            </Grid>


        );
    }
}

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },

}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        cursor: 'pointer'
    },
}))(TableRow);




const ListData = ({ image, first_name, last_name, email, phone, index }) => {
    return (
        <StyledTableRow key={index}>
            <StyledTableCell>{index + 1}</StyledTableCell>
            <StyledTableCell component="th" scope="row">
                <Avatar variant="square" alt={image} src={image ? image : null} />
            </StyledTableCell>
            <StyledTableCell>{first_name}</StyledTableCell>
            <StyledTableCell>{last_name}</StyledTableCell>
            <StyledTableCell>{email}</StyledTableCell>
            <StyledTableCell>{phone}</StyledTableCell>

        </StyledTableRow>
    )
}
