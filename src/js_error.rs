use std::fmt;
use std::result;

use var::JsVarValue;
use jsrs_common::gc_error::GcError;


#[derive(Debug)]
pub enum JsError {
    ParseError(String),
    GcError(GcError),
    TypeError(String),
    ReferenceError(String),
    JsVar(JsVarValue),
    UnimplementedError(String),
}

impl JsError {
    pub fn invalid_lhs() -> JsError {
        JsError::ReferenceError(String::from("Invalid left-hand side in assignment"))
    }

    pub fn unimplemented(typ: &str) -> JsError {
        JsError::UnimplementedError(format!("{} not implemented", typ))
    }
}

impl fmt::Display for JsError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            JsError::ParseError(ref s) => write!(f, "ParseError: {}", s),
            JsError::GcError(ref gc) => write!(f, "GcError: {}", gc),
            JsError::TypeError(ref s) => write!(f, "TypeError: {}", s),
            JsError::ReferenceError(ref s) => write!(f, "ReferenceError: {}", s),
            JsError::JsVar(ref var_value) => write!(f, "{:?}", var_value),
            JsError::UnimplementedError(ref s) => write!(f, "UnimplementedError: {}", s),
        }
    }
}

impl From<GcError> for JsError {
    fn from(e: GcError)-> Self {
        JsError::GcError(e)
    }
}

pub type Result<T> = result::Result<T, JsError>;
