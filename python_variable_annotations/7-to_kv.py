#!/usr/bin/env python3
"""Module that provides function to_kv."""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """returns sum of a list of integers and floats"""
    return (k, v ** 2)
