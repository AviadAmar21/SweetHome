import React from 'react';
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from 'react-router-dom';
import useStyles from './styles'
import CartItem from './CartItem/CartItem'

const Cart = ({ cart, updateCartQty , removeFromCart , emptyCart }) => {
    const classes = useStyles();

    const EmptyCart = () => (
        <Typography variant="subtitle1">You have no items in your shopping cart.
            <Link to="/" className={classes.link}> Time to start add some products!</Link>
        </Typography>
    );

    const FilledCart = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem item={item} updateCartQty={updateCartQty} removeFromCart={removeFromCart} />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">Subtotal: {cart.subtotal.formatted_with_code}</Typography>
                <div>
                    <Button onClick={emptyCart } classes={classes.emptyButton} size="large" type="button" variant="contained" color="secondary">Empty Cart</Button>
                    <Button component={Link} to="/checkout" classes={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                </div>
            </div>

        </>
    )

    if(!cart.line_items) return 'Loading ...'

    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h4" gutterBottom>Your Shopping Cart</Typography>
            {!cart.line_items.length ? <EmptyCart /> : <FilledCart />}
        </Container>
    );
};

export default Cart;
