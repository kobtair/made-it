import styled from 'styled-components'

export const TemporaryDrawerContainer = styled.div`
display: none;
@media (max-width: 768px) {
    display: block;
    
}
button{
    background-color: #100f14 ;
    padding: 10px;
    width: 50px;
    display: flex;
    flex-direction: column;
    row-gap: 10px;
    .bar{
        width: 100%;
        border: 1px solid white;
        background-color: white;

    }
}

`