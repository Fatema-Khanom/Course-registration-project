

const Cart = ({selectedCourse}) => {
    return (
        <div>
            <h1>bhbbfjvbjf hbvjfbvj</h1>
            {
                selectedCourse.map((course)=>(
                    <ul>{course.title}</ul>
                ))
            }
        </div>
    );
};

export default Cart;