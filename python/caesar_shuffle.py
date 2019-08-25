def shift_input():
    """Asks for an integer input.

    Returns:
        int: An integer representing how many places over to shift.
    """
    try:
        num = int(input("Enter a valid integer... "))
        return num
    except:
        print("Invalid input.")
        return shift_input()


def caesar_alpha_shuffle(shift):
    """Creates an array of the resulting alphabet after the caesar shuffle.

    Args:
        shift (int): The number of places to shift the alphabet.
    Returns:
        list: A list of the resulting alphabet after caesar shuffled.
    """
    alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z"]
    for i in range(shift):
        for j in range(1, len(alphabet)):
            alphabet[0], alphabet[j] = alphabet[j], alphabet[0]
    return alphabet

def caesar_alphanumeric_shuffle(shift):
    """Creates an array of the resulting alphanumeric after the caesar shuffle.

    Args:
        shift (int): The number of places to shift the alphanumeric.
    Returns:
        list: A list of the resulting alphanumeric after caesar shuffled.
    """
    alphanumeric = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for i in range(shift):
        for j in range(1, len(alphanumeric)):
            alphanumeric[0], alphanumeric[j] = alphanumeric[j], alphanumeric[0]
    return alphanumeric

def caesar_ascii_shuffle(shift):
    """Creates an array of the resulting ascii after the caesar shuffle.
    
    Args:
        shift (int): The number of places to shift the ascii.
    Returns:
        list: A list of the resulting ascii after caesar shuffled.
    """
    _ascii = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    for i in range(shift):
        for j in range(1, len(_ascii)):
            _ascii[0], _ascii[j] = _ascii[j], _ascii[0]
    return _ascii

def caesar_secret(shift, diff, mode=None):
    _ascii = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t",
                "u", "v", "w", "x", "y", "z", 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if mode == "each_shift":
        curr_diff = 0
        for i in range(shift):
            for j in range(1, len(_ascii)):
                _ascii[0], _ascii[j + curr_diff] = _ascii[j + curr_diff], _ascii[0]
            curr_diff += diff
    elif mode == "each_swap":
        for i in range(shift):
            curr_diff = 0
            for j in range(1, len(_ascii)):
                _ascii[0], _ascii[j + curr_diff] = _ascii[j + curr_diff], _ascii[0]
                curr_diff += diff
    else:
        print("specificy mode")
    return _ascii

if __name__ == "__main__":
    shift = shift_input()
    caesar_array = caesar_alpha_shuffle(shift)
    print(caesar_array)
    
