import styled from '@emotion/styled';



const Container = styled.div`
max-width: 1150px;
min-height: 100vh;
padding: 4rem 0;
margin: auto;
flex: 1;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`;
const Main = styled.main `
min-height: 100vh;
padding: 4rem 0;
flex: 1;
display: flex;
flex-direction: column;
justify-content: start;
align-items: center;
`;

export default function About() {
    return (
        <Container>
            <Main>
                <h1>à propos de moi</h1>
                <p>はじめまして。
                りなと申します。東京都出身の２６歳女性です。
                大学ではフランス語を専攻していたこともあり、
                主にフランス語圏の方に日本語学習の手助けができればいいなと思っております。
                現在パリに住んでいるので現地の方と時差なく授業ができます。

                ぜひ楽しみながら一緒に日本語を学びましょう！</p>

                <p>現在私はプロの日本語教師ではありませんが、
                お手伝いできることはたくさんあると思います。
                現在パリで乳幼児対象ではありますが日本語を教えています

                まずは日常的に日本語を話す機会を増やしませんか？</p>

            </Main>
        </Container>
    )
}