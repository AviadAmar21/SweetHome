import React from 'react';
import { TextField, Grid } from "@material-ui/core";
import { useFormContext, Controller } from "react-hook-form";

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    const isError = false;

    return (
        <Grid item xs={12} sm={6}>
            <Controller
                render = {({ field})=> (
                    <TextField
                        fullWidth
                        label={label}
                        required
                    />
                )}
                as={TextField}
                name={name}
                control={control}
                label={label}
                fullWidth
                error={isError}
            />
        </Grid>
    );
};

export default FormInput;
