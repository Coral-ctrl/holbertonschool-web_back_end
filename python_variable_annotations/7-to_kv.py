#!/usr/bin/env python3
"""Module that provides function to_kv."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple of a string k and the square of int/float v as a float."""
    return (k, v ** 2)
