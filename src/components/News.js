import React from 'react';
import { Tabs, Tab, Container } from 'react-materialize';
export default function News () {
    return (
        <Container>
            <Tabs
                className="tab-demo z-depth-1"
                options={{
                    swipeable: true
                }}
                scope="tabs-32"
            >
                <Tab
                    // className="blue"
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="News 1"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                    </p>
                    <img style={{ position: 'relative' }} src='https://kenh14cdn.com/zoom/460_289/203336854389633024/2022/10/12/photo1665547433485-16655474339172135336004.png' />


                </Tab>
                <Tab
                    active
                    // className="red"
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="News 2"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?

                    </p>
                    <img style={{ position: 'relative' }} src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/10/12/photo-3-1665556849543868415714.jpg' />

                </Tab>
                <Tab
                    // className="green"
                    options={{
                        duration: 300,
                        onShow: null,
                        responsiveThreshold: Infinity,
                        swipeable: false
                    }}
                    title="News 3"
                >
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore ratione tenetur cupiditate dolore excepturi velit laborum, neque dolor ipsa voluptatum quo iste veritatis atque corrupti quas reiciendis voluptatem tempore sed?

                    </p>
                    <img style={{ position: 'relative' }} src='https://kenh14cdn.com/thumb_w/620/203336854389633024/2022/10/12/photo-4-16655476967051503321039.jpg' />

                </Tab>
            </Tabs>
        </Container>
    );
}
