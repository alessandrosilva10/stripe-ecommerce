import { createGlobalStyle } from "styled-components";
import "../../node_modules/bulma/bulma.sass";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #f0f2f5;
    --red: #e52e4d;
    --blue: #5429cc;
    --green: #33cc95;
    
    --blue-light: #6933ff;
    --text-title: #363f5f;
    --text-body: #969cb3;
    --background: #f0f2f5;
    --shape: #ffffff;
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .app {
      position: relative;
      min-height: 100vh;
  }

  img {
      width: 100%;
  }
  
  .nomad-container {
      width: 60%;
      margin: 0 auto;
  }

  #shop-now {
      font-weight: 600;
      &:hover {
          background-color: #606060;
      }
  }

  .featured-collection {
      margin-top: 6rem;
      .featured-collection-title {
          font-size: 2rem;
      }
      .featured-image {
          cursor: pointer;
      }

      @media(min-width: 1024px){
          .products {
              display: flex;
              justify-content: space-between;
              padding: 5px;

              .featured-product {
                  margin: 10px;
              }
          }
      }
  }

  .name-price {
      p{
          font-size: 1.2rem;
          font-weight: bold;
      }
      h3 {
          font-size: 1rem;
      }
  }

  .nomad-btn{
      display: block;
      width: 100%;
      line-height: 1.4;
      padding-left: 5px;
      padding-right: 5px;
      white-space: normal;
      margin-top: 0;
      margin-bottom: 10px;
      min-height: 44px;
  }

  .nomad-input {
      width: 100%;
      padding: 10px;
      margin-bottom: 1rem;
  }

  form {
    padding: 2rem;
    text-align: center;
    input[type=text],
    input[type=email],
    input[type=password]{
        width: 60%;
    }

    .submit-btn {
        display: flex;
        justify-content: center;
    }

    .submit {
        width: 200px;
    }
  }

  .form-error {
      border: 1px solid red;
  }

  ::placeholder{
    color: #606060;
    font-size: 16px;
  }

  #btn-white-outline {
      border: 1px soli grey;
      margin-bottom: 1rem;
  }

  #but-it-now-btn {
      &:hover {
          background-color: #606060;
      }
  }

  @media(mix-width: 1024px){
    form {
        width: 80%;
        margin: 0 auto;
        input[type=text],
        input[type=email],
        input[type=password]{
            width: 65%;
    }
  }
}
`;
