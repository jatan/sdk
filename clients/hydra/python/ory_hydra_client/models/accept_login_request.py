# coding: utf-8

"""
    ORY Hydra

    Welcome to the ORY Hydra HTTP API documentation. You will find documentation for all HTTP APIs here.  # noqa: E501

    The version of the OpenAPI document: v0.0.0-alpha.40
    Generated by: https://openapi-generator.tech
"""


import pprint
import re  # noqa: F401

import six

from ory_hydra_client.configuration import Configuration


class AcceptLoginRequest(object):
    """NOTE: This class is auto generated by OpenAPI Generator.
    Ref: https://openapi-generator.tech

    Do not edit the class manually.
    """

    """
    Attributes:
      openapi_types (dict): The key is attribute name
                            and the value is attribute type.
      attribute_map (dict): The key is attribute name
                            and the value is json key in definition.
    """
    openapi_types = {
        'acr': 'str',
        'context': 'dict(str, object)',
        'force_subject_identifier': 'str',
        'remember': 'bool',
        'remember_for': 'int',
        'subject': 'str'
    }

    attribute_map = {
        'acr': 'acr',
        'context': 'context',
        'force_subject_identifier': 'force_subject_identifier',
        'remember': 'remember',
        'remember_for': 'remember_for',
        'subject': 'subject'
    }

    def __init__(self, acr=None, context=None, force_subject_identifier=None, remember=None, remember_for=None, subject=None, local_vars_configuration=None):  # noqa: E501
        """AcceptLoginRequest - a model defined in OpenAPI"""  # noqa: E501
        if local_vars_configuration is None:
            local_vars_configuration = Configuration()
        self.local_vars_configuration = local_vars_configuration

        self._acr = None
        self._context = None
        self._force_subject_identifier = None
        self._remember = None
        self._remember_for = None
        self._subject = None
        self.discriminator = None

        if acr is not None:
            self.acr = acr
        if context is not None:
            self.context = context
        if force_subject_identifier is not None:
            self.force_subject_identifier = force_subject_identifier
        if remember is not None:
            self.remember = remember
        if remember_for is not None:
            self.remember_for = remember_for
        self.subject = subject

    @property
    def acr(self):
        """Gets the acr of this AcceptLoginRequest.  # noqa: E501

        ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication.  # noqa: E501

        :return: The acr of this AcceptLoginRequest.  # noqa: E501
        :rtype: str
        """
        return self._acr

    @acr.setter
    def acr(self, acr):
        """Sets the acr of this AcceptLoginRequest.

        ACR sets the Authentication AuthorizationContext Class Reference value for this authentication session. You can use it to express that, for example, a user authenticated using two factor authentication.  # noqa: E501

        :param acr: The acr of this AcceptLoginRequest.  # noqa: E501
        :type: str
        """

        self._acr = acr

    @property
    def context(self):
        """Gets the context of this AcceptLoginRequest.  # noqa: E501

        Context is an optional object which can hold arbitrary data. The data will be made available when fetching the consent request under the \"context\" field. This is useful in scenarios where login and consent endpoints share data.  # noqa: E501

        :return: The context of this AcceptLoginRequest.  # noqa: E501
        :rtype: dict(str, object)
        """
        return self._context

    @context.setter
    def context(self, context):
        """Sets the context of this AcceptLoginRequest.

        Context is an optional object which can hold arbitrary data. The data will be made available when fetching the consent request under the \"context\" field. This is useful in scenarios where login and consent endpoints share data.  # noqa: E501

        :param context: The context of this AcceptLoginRequest.  # noqa: E501
        :type: dict(str, object)
        """

        self._context = context

    @property
    def force_subject_identifier(self):
        """Gets the force_subject_identifier of this AcceptLoginRequest.  # noqa: E501

        ForceSubjectIdentifier forces the \"pairwise\" user ID of the end-user that authenticated. The \"pairwise\" user ID refers to the (Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg] of the OpenID Connect specification. It allows you to set an obfuscated subject (\"user\") identifier that is unique to the client.  Please note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token. It does not change the sub claim in the OAuth 2.0 Introspection.  Per default, ORY Hydra handles this value with its own algorithm. In case you want to set this yourself you can use this field. Please note that setting this field has no effect if `pairwise` is not configured in ORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via `subject_type` key in the client's configuration).  Please also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies that you have to compute this value on every authentication process (probably depending on the client ID or some other unique value).  If you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.  # noqa: E501

        :return: The force_subject_identifier of this AcceptLoginRequest.  # noqa: E501
        :rtype: str
        """
        return self._force_subject_identifier

    @force_subject_identifier.setter
    def force_subject_identifier(self, force_subject_identifier):
        """Sets the force_subject_identifier of this AcceptLoginRequest.

        ForceSubjectIdentifier forces the \"pairwise\" user ID of the end-user that authenticated. The \"pairwise\" user ID refers to the (Pairwise Identifier Algorithm)[http://openid.net/specs/openid-connect-core-1_0.html#PairwiseAlg] of the OpenID Connect specification. It allows you to set an obfuscated subject (\"user\") identifier that is unique to the client.  Please note that this changes the user ID on endpoint /userinfo and sub claim of the ID Token. It does not change the sub claim in the OAuth 2.0 Introspection.  Per default, ORY Hydra handles this value with its own algorithm. In case you want to set this yourself you can use this field. Please note that setting this field has no effect if `pairwise` is not configured in ORY Hydra or the OAuth 2.0 Client does not expect a pairwise identifier (set via `subject_type` key in the client's configuration).  Please also be aware that ORY Hydra is unable to properly compute this value during authentication. This implies that you have to compute this value on every authentication process (probably depending on the client ID or some other unique value).  If you fail to compute the proper value, then authentication processes which have id_token_hint set might fail.  # noqa: E501

        :param force_subject_identifier: The force_subject_identifier of this AcceptLoginRequest.  # noqa: E501
        :type: str
        """

        self._force_subject_identifier = force_subject_identifier

    @property
    def remember(self):
        """Gets the remember of this AcceptLoginRequest.  # noqa: E501

        Remember, if set to true, tells ORY Hydra to remember this user by telling the user agent (browser) to store a cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, he/she will not be asked to log in again.  # noqa: E501

        :return: The remember of this AcceptLoginRequest.  # noqa: E501
        :rtype: bool
        """
        return self._remember

    @remember.setter
    def remember(self, remember):
        """Sets the remember of this AcceptLoginRequest.

        Remember, if set to true, tells ORY Hydra to remember this user by telling the user agent (browser) to store a cookie with authentication data. If the same user performs another OAuth 2.0 Authorization Request, he/she will not be asked to log in again.  # noqa: E501

        :param remember: The remember of this AcceptLoginRequest.  # noqa: E501
        :type: bool
        """

        self._remember = remember

    @property
    def remember_for(self):
        """Gets the remember_for of this AcceptLoginRequest.  # noqa: E501

        RememberFor sets how long the authentication should be remembered for in seconds. If set to `0`, the authorization will be remembered for the duration of the browser session (using a session cookie).  # noqa: E501

        :return: The remember_for of this AcceptLoginRequest.  # noqa: E501
        :rtype: int
        """
        return self._remember_for

    @remember_for.setter
    def remember_for(self, remember_for):
        """Sets the remember_for of this AcceptLoginRequest.

        RememberFor sets how long the authentication should be remembered for in seconds. If set to `0`, the authorization will be remembered for the duration of the browser session (using a session cookie).  # noqa: E501

        :param remember_for: The remember_for of this AcceptLoginRequest.  # noqa: E501
        :type: int
        """

        self._remember_for = remember_for

    @property
    def subject(self):
        """Gets the subject of this AcceptLoginRequest.  # noqa: E501

        Subject is the user ID of the end-user that authenticated.  # noqa: E501

        :return: The subject of this AcceptLoginRequest.  # noqa: E501
        :rtype: str
        """
        return self._subject

    @subject.setter
    def subject(self, subject):
        """Sets the subject of this AcceptLoginRequest.

        Subject is the user ID of the end-user that authenticated.  # noqa: E501

        :param subject: The subject of this AcceptLoginRequest.  # noqa: E501
        :type: str
        """
        if self.local_vars_configuration.client_side_validation and subject is None:  # noqa: E501
            raise ValueError("Invalid value for `subject`, must not be `None`")  # noqa: E501

        self._subject = subject

    def to_dict(self):
        """Returns the model properties as a dict"""
        result = {}

        for attr, _ in six.iteritems(self.openapi_types):
            value = getattr(self, attr)
            if isinstance(value, list):
                result[attr] = list(map(
                    lambda x: x.to_dict() if hasattr(x, "to_dict") else x,
                    value
                ))
            elif hasattr(value, "to_dict"):
                result[attr] = value.to_dict()
            elif isinstance(value, dict):
                result[attr] = dict(map(
                    lambda item: (item[0], item[1].to_dict())
                    if hasattr(item[1], "to_dict") else item,
                    value.items()
                ))
            else:
                result[attr] = value

        return result

    def to_str(self):
        """Returns the string representation of the model"""
        return pprint.pformat(self.to_dict())

    def __repr__(self):
        """For `print` and `pprint`"""
        return self.to_str()

    def __eq__(self, other):
        """Returns true if both objects are equal"""
        if not isinstance(other, AcceptLoginRequest):
            return False

        return self.to_dict() == other.to_dict()

    def __ne__(self, other):
        """Returns true if both objects are not equal"""
        if not isinstance(other, AcceptLoginRequest):
            return True

        return self.to_dict() != other.to_dict()