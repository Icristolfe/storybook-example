import styled from 'styled-components'
import { AppColors } from '../../styles/global'
import { ContainerProps  } from '.'

export const variantToColors = {
    primary: {
        bgColor: AppColors.primary,
        borderColor: AppColors.primary,
        color: AppColors.gray,
        hover: {
            bgColor: AppColors.darkPrimary,
            color: AppColors.gray
        }
    },
    secondary: {
        bgColor: AppColors.secondary,
        borderColor: AppColors.secondary,
        color: AppColors.lightGray,
        hover: {
            bgColor: AppColors.darkSecondary,
            color: AppColors.lightGray
    }
},
    outline: {
        bgColor: 'transparent',
        borderColor: AppColors.gray,
        color: AppColors.gray,
        hover: {
            bgColor: AppColors.gray,
            color: AppColors.lightGray
    }
    }  
}

export const Container = styled.button<ContainerProps>`
    width: 100%;
    max-width: 180px;
    height: 48px;
    background-color: ${(props) =>props.bgColor};
    border: solid 1px ${(props) =>props.borderColor};
    color: ${(props) =>props.color};

    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;

    &:hover {
    background-color: ${(props) =>props.hoverBgColor};
    border: solid 1px ${(props) =>props.hoverBgColor};
    color: ${(props) =>props.hoverColor};
    }
`